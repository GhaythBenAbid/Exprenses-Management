// store.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import PocketBase from 'pocketbase';

const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL);

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
    user: User | null;
    token: string | null;
    isAuthenticated: () => boolean;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
    register: (data: any) => void;
    getUser: () => void;
    updateProfileImage: (image: FormData) => void;
}

const authStore = create<Auth>(
    persist(
        (set) => ({
            user: null,
            token : null,
            isAuthenticated: () => {
                const token = localStorage.getItem('token');
                if (token) {
                    return true;
                } else {
                    return false;
                }
            },
            login: async (email : string, password : string) => {

                const authData = await pb.collection('users').authWithPassword(
                    email, password
                ).then((res) => {
                    set({ user: res.record });
                    set({ token: res.token });
                    window.location.href = '/';

                    return true;
                }).catch(() => {
                    return false;
                });

                return authData;


            },
            logout: () => {
                localStorage.clear();
                window.location.href = '/login';

            },
            register: async (data : any) => {
                data.emailVisibility = true;
                await pb.collection('users').create(data).then(() => {
                    window.location.href = '/login';
                }).catch(() => {
                });
            },
            updateProfileImage: async (image: FormData) => {
                const user = await authStore.getState().user;
                await pb.collection('users').update(user?.id ?? '', {
                    image,
                }).then((res) => {
                    console.log(res);
                }).catch(() => {
                });
            }
        }),
        {
            name: 'auth-storage',
        }
    ) as any
);

export default authStore;
