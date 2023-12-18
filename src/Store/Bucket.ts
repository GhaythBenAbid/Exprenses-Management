import { create } from 'zustand';
import PocketBase from 'pocketbase';
import { persist } from 'zustand/middleware';
import authStore from './Auth';

const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL);


interface Bucket {
    id: string;
    title: string;
    owner: string;
    currency: string;
    total: number;
}



interface BucketMethods {
    buckets: Bucket[];
    bucket: Bucket | null;
    getBuckets: () => void;
    getSelectedBucket: (id : string) => void;
    
}


const bucketStore = create<BucketMethods>(
    persist(
        (set) => ({
            bucket: null,
            buckets: [],
            getBuckets: async () => {
                const user = await authStore.getState().user;
                const buckets = await pb.collection('buckets').getList(1, 50, {
                    filter: `owner = '${user?.id}'`,
                })

                set({ buckets: buckets.items });
            },
            getSelectedBucket: async (id: string) => {
                const bucket = await pb.collection('buckets').getOne(id);

                const transactions = await pb.collection('transactions').getList(1, 50, {
                    filter: `bucket = '${id}'`,
                })

                let total = 0;
                transactions.items.forEach((transaction) => {
                    if (transaction.type === 'income') {
                        total += transaction.value;
                    } else {
                        total -= transaction.value;
                    }
                });

                bucket.total = total;



                set({ bucket : bucket  });
            },
            
        }), {
        name: 'bucket-storage',
        getStorage: () => localStorage
    }) as any
);


export default bucketStore;