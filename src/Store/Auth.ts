// store.ts
import create from 'zustand';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');


interface Auth {
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
    register: (data: any) => void;
}

const authStore = create<Auth>((set) => ({
    login: async (email, password) => {

        const authData = await pb.collection('users').authWithPassword(
            email, password
        ).then((res) => {
            localStorage.setItem('token', res.token);
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
        await pb.collection('users').create(data).then((res) => {
            window.location.href = '/login';
        }).catch((err) => {
            console.log(err);
        });
    },



}));

export default authStore;
