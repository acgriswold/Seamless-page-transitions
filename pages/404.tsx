import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="px-4 py-24 grid lg:grid-cols-2 justify-center gap-16">
      <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
      <div className="flex-v">
        <h2 className="prose-2xl">
          Looks like someone tripped over the wires...
        </h2>
        <p className="mb-8">Let's get you back home and try that again</p>
        <Link href="/" className="daisy-btn daisy-btn-outline daisy-btn-block">
          Take me back!
        </Link>
      </div>
    </div>
  );
}
