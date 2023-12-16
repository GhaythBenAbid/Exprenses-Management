// store.ts
import create from 'zustand';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

interface User {
    image: string;
    collectionId: string;
    collectionName: string;
    created: string;
    email: string;
    emailVisibility: boolean;
    id: string;
    updated: string;
    username: string;
    verified: boolean;
}


interface Auth {
    isAuthenticated: () => boolean;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
    register: (data: any) => void;
    user: User | null;
    getUser: () => void;
}

const authStore = create<Auth>((set) => ({
    user: null,
    getUser: async () => {
        const token = localStorage.getItem('token');
        console.log(token);
        if (token) {
            const user = await pb.collection('users').getOne(localStorage.getItem('id') as string) as User;
            console.log(user);
            set({ user: user });
        }
    },
    isAuthenticated: () => {
        const token = localStorage.getItem('token');
        if (token) {
            return true;
        } else {
            return false;
        }
    },
    login: async (email, password) => {

        const authData = await pb.collection('users').authWithPassword(
            email, password
        ).then((res) => {
            localStorage.setItem('token', res.token);
            localStorage.setItem('id', res.record.id);
            window.location.href = '/dashboard';
            return true;
        }).catch(() => {
            return false;
        });

        return authData;


    },
    logout: () => {
        localStorage.removeItem('token');

    },
    register: async (data) => {

        data.emailVisibility = true;
        await pb.collection('users').create(data).then(() => {
            window.location.href = '/login';
        }).catch((err) => {
            console.log(err);
        });
    },



}));

export default authStore;
