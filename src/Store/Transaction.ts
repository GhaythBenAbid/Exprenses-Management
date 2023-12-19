import { create } from 'zustand';
import PocketBase from 'pocketbase';
import { persist } from 'zustand/middleware';
import authStore from './Auth';
import bucketStore from './Bucket';

const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL);


interface Transaction {
    id: string;
    type: string;
    title: string;
    value: number;
    category: string;
    date: string;
    bucket: string;
}



interface TransactionMethods {
    allTransactions: Transaction[];
    transactions: Transaction[];
    transaction: Transaction | null;
    getAllTransactions: () => void;
    getTransactions: (bucketid : string) => void;
    addTransaction: (data: any) => void;


    
}


const transactionStore = create<TransactionMethods>(
    persist(
        (set) => ({
            allTransactions: [],
            transaction: null,
            transactions: [],
            getAllTransactions: async () => {

                const buckets = bucketStore.getState().buckets;

                let listeTransactions: any[] = [];
                for (let i = 0 ; i < buckets.length ; i++ ) {
                    const bucket = buckets[i];
                    const transactions = await pb.collection('transactions').getList(1, 50, {
                        filter: `bucket = '${bucket.id}'`,
                    })

                    listeTransactions = [...listeTransactions, ...transactions.items];

                    
                }


                set({ allTransactions: listeTransactions });

            },
            getTransactions: async (bucketid : string) => {
                const transactions = await pb.collection('transactions').getList(1, 50, {
                    filter: `bucket = '${bucketid}'`,
                })
                set({ transactions: transactions.items });
            },
            addTransaction: async (data : any) => {
                const transaction = await pb.collection('transactions').create(data);
            }
            
        }), {
        name: 'tranaction-storage',
        getStorage: () => localStorage
    }) as any
);


export default transactionStore;