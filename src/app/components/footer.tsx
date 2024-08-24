            import Link from "next/link";

            export default function Footer() {
                const currentYear = new Date().getFullYear();
                return (
                    <footer
                        className="bg-secondary border-t-[0.1px] border-t-slate-200 text-sm text-center text-slate-100  w-full">
                        {/*<div className="text-left px-12">*/}
                        {/*    <h1 className="font-bold text-2xl">DESA DIRGAHAYU</h1>*/}
                        {/*    <p>Jalan Paratag No. 01 Dirgahayu - Kadipaten - Tasikmalaya (46157)</p>*/}
                        {/*</div>*/}
                        <div
                            className="py-2 bg-slate-100 w-full backdrop-blur-lg bg-opacity-10">
                            <span>&copy;2024 Desa Dirgahayu{" "}</span>
                            <p>{" "} Depeloved by{" "}
                                <Link
                                    href="https://www.instagram.com/agisnarevaldo/"
                                    className="underline"
                                >
                                    agisnarevaldo
                                </Link>
                                <span> at </span>
                                <Link
                                    href="https://www.instagram.com/kkn.dirgahayu2024/"
                                    className="underline"
                                >
                                    KKN-PPM <UNPER></UNPER>
                                </Link></p>

                        </div>
                    </footer>
                )
            }