'use client'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
require('@solana/wallet-adapter-react-ui/styles.css');
import { useWallet } from '@solana/wallet-adapter-react';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import group from "../../../../public/images/Group.svg";
import supabase from '../../../../supabase';

export default function Connecting() {
    const { connected, publicKey } = useWallet();
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [userExists, setUserExists] = useState(false);

    useEffect(() => {
        const checkUser = async () => {
            if (connected && publicKey) {
                const { data, error } = await supabase
                    .from('onboarding')
                    .select('name')
                    .eq('wallet_id', publicKey.toString())
                    .single();

                if (data) {
                    setUserExists(true);
                }

                setLoading(false);
            }
        };

        checkUser();
    }, [connected, publicKey]);

    useEffect(() => {
        if (!loading) {
            if (userExists) {
                router.push("/marketplace");
            } else {
                router.push("/user_onboarding");
            }
        }
    }, [loading, userExists, router]);

    return (
        <div style={{ boxShadow: '0px 1px 90px rgba(255, 255, 255, 0.3)' }} className="flex flex-col justify-center items-center -mt-12 px-16 py-14 bg-black rounded-xl max-w-[396px]">
            <img
                loading="lazy"
                src={group.src}
                className="mix-blend-screen aspect-[1.01] w-[98px]"
            />
            <div className="mt-9 text-3xl font-nunito text-nowrap tracking-wide leading-8 text-white">
                Requested Sign In
            </div>
            <div className="self-center mt-4 font-nunito text-base tracking-normal leading-8 text-white text-opacity-60">
                Click sign button in the wallet popup.
            </div>
            <div className="justify-center font-nunito items-center px-14 py-2 text-nowrap mt-16 text-base font-medium tracking-wide leading-8 bg-[#151515] rounded-xl text-white text-opacity-80">
                <WalletMultiButton style={{ backgroundColor: 'transparent', color: '#fff', borderRadius: '999px', padding: '12px 24px', fontSize: '16px', fontWeight: 'bold', textTransform: 'uppercase' }}>
                    <span className="font-nunito text-opacity-80 leading-8 tracking-wide font-medium text-base"> Retry Connecting </span>
                </WalletMultiButton>
            </div>
            <a href="/connect_wallet" className="mt-7 text-center text-white text-opacity-40">
                Go Back
            </a>
        </div>
    );
}
    