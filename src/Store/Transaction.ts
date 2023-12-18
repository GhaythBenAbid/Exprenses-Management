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
    category: string;
    date: string;
    bucket: string;
}



interface TransactionMethods {
    transactions: Transaction[];
    transaction: Transaction | null;
    getTransactions: (bucketid : string) => void;
    addTransaction: (data: any) => void;


    
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