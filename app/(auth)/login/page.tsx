import SecondaryButton from "@/components/Buttons/SecondaryButton";
import Footer from "@/components/Footer/Footer";
import LoginForm from "@/components/LoginForm/LoginForm";
import MotionElement from "@/components/MotionElemetn/MotionElement";
import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";
import { BsFacebook, BsGoogle } from "react-icons/bs";

const Login = () => {
  return (
    <>
      <header className="px-4 relative">
        <Navbar />
      </header>

      <main>
        <section id="login-section" className="overflow-hidden">
          <div className="xl:container xl:mx-auto pt-32 pb-24 px-4 flex justify-center">
            <div className="flex flex-col gap-y-16 w-full sm:w-144 md:w-180">
              <MotionElement
                elem="h2"
                className="font-bold text-6xl leading-normal text-center text-[#f2f2f2] mb-2"
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                ログイン
              </MotionElement>

              <MotionElement
                elem="div"
                className="flex flex-col gap-y-16"
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              >
                <div className="flex flex-col gap-y-6">
                  <div className="flex flex-col gap-y-3">
                    <span className="text-[#d5d5d5] text-xl">
                      ソーシャルでログイン
                    </span>
                    <hr className="text-[#d5d5d548]" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <SecondaryButton
                      type="button"
                      className="w-full h-16 p-px md:h-18"
                    >
                      <Link
                        href={"#"}
                        className="w-full h-full flex items-center justify-center gap-x-2 text-xl"
                      >
                        <BsGoogle className="text-3xl" />
                        Google
                      </Link>
                    </SecondaryButton>

                    <SecondaryButton
                      type="button"
                      className="w-full h-16 p-px md:h-18"
                    >
                      <Link
                        href={"#"}
                        className="w-full h-full flex items-center justify-center gap-x-2 text-xl"
                      >
                        <BsFacebook className="text-3xl" />
                        Facebook
                      </Link>
                    </SecondaryButton>
                  </div>
                </div>

                <div className="flex flex-col gap-y-6">
                  <div className="flex flex-col gap-y-3">
                    <span className="text-[#d5d5d5] text-xl">
                      またはメールでログイン
                    </span>
                    <hr className="text-[#d5d5d548]" />
                  </div>

                  <LoginForm />
                </div>
              </MotionElement>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Login;
