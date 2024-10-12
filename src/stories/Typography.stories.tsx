export default {
  title: "General/Typography",
};

export const Default = () => (
  <>
    <div className="p-4">
      <h1>h1 example</h1>
      <p>p example</p>
    </div>
    <div className="p-4 bg-background">
      <h1 className="text-white">h1 example</h1>
      <p className="text-white">p example</p>
    </div>
  </>
);

export const Gradient = () => (
  <>
    <div className="p-4">
      <h1 className="bg-gradient-to-b from-foreground to-purple-300 bg-clip-text text-transparent">
        h1 example
      </h1>
      <p className="bg-gradient-to-b from-foreground to-purple-300 bg-clip-text text-transparent">
        p example
      </p>
    </div>
    <div className="bg-background p-4">
      <h1 className="bg-gradient-to-b from-foreground to-purple-300 bg-clip-text text-transparent">
        h1 example
      </h1>
      <p className="bg-gradient-to-b from-foreground to-purple-300 bg-clip-text text-transparent">
        p example
      </p>
    </div>
  </>
);
