import Link from 'next/link';

export default function Custom404() {
  return (
    <div
      className="px-4 py-24 items-center flex
    justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16"
    >
      <div className="flex-v gap-[17] hover:gap-2">
        <h1 className="prose-2xl">
          Looks like someone tripped over the wires...
        </h1>
        <p className="mb-8">Let's get you back home and try that again</p>
        <Link href="/" className="daisy-btn daisy-btn-outline daisy-btn-block">
          Take me back!
        </Link>
      </div>
      <div>
        <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
      </div>
    </div>
  );
}
