import Accordion from "../components/Accordion";

export default function AccordionPage() {
  const items = [
    {
      id: "lihvlkmk",
      label: "Can I add a label to this?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor eu augue ut lectus arcu bibendum. Dis parturient montes nascetur ridiculus mus mauris vitae.",
    },
    {
      id: "97gbhsd",
      label: "What will this component look like?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: "msbvfrwirel",
      label: "Please include a cool label here!",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Lacinia at quis risus sed vulputate odio. Id volutpat lacus laoreet non curabitur gravida arcu ac. Placerat vestibulum lectus mauris ultrices.",
    },
    {
      id: "sdfgdfg",
      label: "Why did I add so many items?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere ac ut consequat semper viverra.",
    },
  ];

  return <Accordion items={items} />;
}
