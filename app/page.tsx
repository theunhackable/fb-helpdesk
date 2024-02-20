import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto my-10 px-5 max-w-[1000px] ">
      <header className="my-10">
        <h1 className="text-2xl text-center font-bold text-primary-accent">
          FB Help Desk
        </h1>
        <p className="italic text-xs font-base text-center">
          Hassleless customer query manager.
        </p>
      </header>
      <figure>
        <Image
          className="w-[90%]"
          src="/fb-help-desk.png"
          width={1000}
          height={500}
          alt="hero page"
        />
        <figcaption className="text-xs italic text-center font-light">
          Our exceptional product that sets a new standard in its industry.
        </figcaption>
      </figure>

      <section id="about" className="my-5">
        <h2 className="text-xl font-bold"> Who are we?</h2>
        <p className="text-sm text-justify my-2">
          Welcome to FB Help Desk, the ultimate solution for Facebook page
          managers! Our platform empowers you to effortlessly manage messages
          and comments, streamlining your communication with customers. With FB
          Help Desk, users can register and log in using their Facebook account,
          enabling them to quickly view and respond to customer queries. Say
          goodbye to manual handling of messages and comments, and say hello to
          a more efficient way of managing your Facebook page interactions!
        </p>
      </section>

      <section id="steps" className="my-5">
        <h2 className="text-xl font-bold"> How to use?</h2>
        <p className="text-sm text-justify my-2">
          Here are the steps on how to use the product:
        </p>
        <ol className=" mx-4 list-decimal text-sm flex flex-col gap-3">
          <li>
            <strong>Register/Login:</strong> Users can register for an account
            on the platform or log in using their existing Facebook credentials.
          </li>
          <li>
            <strong>Connect Facebook Page:</strong> After logging in, users can
            connect their Facebook page(s) to the platform. This step grants the
            platform access to manage messages and comments on the connected
            page(s).
          </li>
          <li>
            <strong>View Messages and Comments:</strong>
            Once the Facebook page is connected, you can view all messages and
            comments received on their page(s) directly on the platform.
          </li>

          <li>
            <strong>Respond to Queries:</strong> You can respond to messages and
            comments directly from the platform. Responses are sent back to the
            respective customers on Facebook.
          </li>
          <li>
            <strong>Delete Integration:</strong> We respect our customer&apos;s
            privacy. You can delete the integration if they have privacy
            concerns.
          </li>

          <li>
            <strong>Logout:</strong> Users can log out of the platform when they
            are done managing their Facebook page interactions.
          </li>
        </ol>
      </section>
    </main>
  );
}
