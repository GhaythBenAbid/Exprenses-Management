import { create } from 'zustand';
import PocketBase from 'pocketbase';
import { persist } from 'zustand/middleware';
import authStore from './Auth';

const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL);


interface Transaction {
    id: string;
    type: string;
    title: string;
    value: number;
    Category: string;
    Date: string;
    bucket: string;
}



interface TransactionMethods {
    transactions: Transaction[];
    transaction: Transaction | null;
    getTransactions: (bucketid : string) => void;


    
}


const transactionStore = create<TransactionMethods>(
    persist(
        (set) => ({
            transaction: null,
            transactions: [],
            getTransactions: async (bucketid : string) => {
                const transactions = await pb.collection('transactions').getList(1, 50, {
                    filter: `bucket = '${bucketid}'`,
                })

                console.log(transactions.items);

                set({ transactions: transactions.items });
            },
            
        }), {
        name: 'tranaction-storage',
        getStorage: () => localStorage
    }) as any
);


export default transactionStore;