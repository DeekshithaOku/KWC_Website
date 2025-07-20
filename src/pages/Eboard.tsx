import { NotebookPaper } from "../components/Notebook";
import { Navbar } from "../components/Navbar";
import { HangingBoard } from "../components/HangingBoard";
import { Icon } from "@iconify/react";
import gmailIcon from "@iconify-icons/logos/google-gmail";
import discordIcon from "@iconify-icons/logos/discord-icon";
import instagramIcon from "@iconify-icons/logos/instagram-icon";

export const Eboard = () => {
  const boardData = [
    {
      boardType: "white" as const,
      icons: [
        <Icon icon={instagramIcon} width="28" height="28" />,
        <Icon icon={discordIcon} width="28" height="28" />,
        <Icon icon={gmailIcon} width="28" height="28" />,
      ],
    },
    {
      boardType: "green" as const,
      icons: [
        <Icon icon={instagramIcon} width="28" height="28" />,
        <Icon icon={discordIcon} width="28" height="28" />,
        <Icon icon={gmailIcon} width="28" height="28" />,
      ],
    },
    {
      boardType: "white" as const,
      icons: [
        <Icon icon={instagramIcon} width="28" height="28" />,
        <Icon icon={discordIcon} width="28" height="28" />,
        <Icon icon={gmailIcon} width="28" height="28" />,
      ],
    },
    {
      boardType: "green" as const,
      icons: [
        <Icon icon={instagramIcon} width="28" height="28" />,
        <Icon icon={discordIcon} width="28" height="28" />,
        <Icon icon={gmailIcon} width="28" height="28" />,
      ],
    },
  ];

  return (
    <div className="relative z-10 w-full h-screen">
      <Navbar />
      <NotebookPaper>
        <div className="flex flex-col items-center space-y-20 pt-24">
          {boardData.map((board, idx) => (
            <HangingBoard
              key={idx}
              boardType={board.boardType}
              icons={board.icons}
              index={idx}
            />
          ))}
        </div>
      </NotebookPaper>
    </div>
  );
};
