import Head from "next/head";
import MadeInUkraineLogo from "../src/comps/ui/MadeInUkraineLogo";
import UA from "../src/comps/ui/UA";

export default function Home() {
  return (
    <>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <img
          src="/img/beams.jpg"
          alt=""
          className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
          width={1308}
        />
        <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <div className="mx-auto max-w-md">
            <div className="divide-y divide-gray-300/50">
              <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
                <div className="centered">
                  <MadeInUkraineLogo />
                </div>
                <div className="mx-auto w-1/3">
                  <UA />
                </div>
              </div>
              <div className="pt-8 text-base font-semibold leading-7">
                <p className="ml-4">BRAVERY OUR NATIONAL RESOURCE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
