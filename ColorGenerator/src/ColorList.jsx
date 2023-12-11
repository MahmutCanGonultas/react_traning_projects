import { nanoid } from "nanoid";
import { toast } from "react-toastify";

function ColorList({ colors }) {
  const renderedColors = colors.map((color, index) => {
    let id = nanoid();
    const { hex, weight } = color;

    const saveToClipboard = async () => {
      if (navigator.clipboard) {
        try {
          await navigator.clipboard.writeText(`#${hex}`);
          toast.success("Color copied to clipboard");
        } catch (error) {
          toast.error("Failed to copy color to clipboard");
        }
      } else {
        toast.error("Clipboard access not available");
      }
    };

    return (
      <article
        className="px-8 py-4 cursor-pointer"
        onClick={saveToClipboard}
        key={id}
        style={{
          background: `#${hex}`,
          color: `${color.type === "shade" ? "white" : "black"}`,
        }}
      >
        <p>{weight}%</p>
        <p>#{hex}</p>
      </article>
    );
  });

  return <section className=" mt-8  colorList">{renderedColors}</section>;
}

export default ColorList;
