import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-primary to-neutral text-white text-center p-8">
      <h1 className="text-5xl font-bold mb-4 animate-fadeInUp">
        Welcome to the Attractive App
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        A beautifully designed app to fetch posts and showcase modern design.
      </p>
      <div className="flex gap-4">
        <Button href="/fetch-posts" label="Fetch Posts" />
        <Button
          href="https://nextjs.org/docs"
          label="Learn More"
          isSecondary={true}
        />
      </div>
    </div>
  );
};

export default Hero;
