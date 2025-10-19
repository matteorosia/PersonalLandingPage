import * as c from "../utils/Const";

export default function ExplorerItem({
  id,
  title,
  type,
  tab,
  onClick,
  isSelected,
  toggleStatus,
}) {
  const marginMap = {
    0: "",
    1: "ml-4",
    2: "ml-12",
  };


  const baseColor = toggleStatus ? c.firstBgColorDark : c.firstBgColorLight;
  const selectedColor = toggleStatus
    ? c.firstBgColorExplorerItemSelectedDark
    : c.firstBgColorExplorerItemSelectedLight;
  const hoverColor = toggleStatus
    ? c.firstBgColorExplorerItemHoverDark
    : c.firstBgColorExplorerItemHoverLight;
  const focusColor = toggleStatus
    ? c.firstBgColorExplorerItemFocusDark
    : c.firstBgColorExplorerItemFocusLight;

  const classes = `
    px-4 text-[14px] cursor-pointer
    ${c.transactionOption}
    ${isSelected ? selectedColor : baseColor}
    ${hoverColor}
    ${focusColor}
  `;

  const textColorMap = {
    1: toggleStatus ? "text-blue-200" : "text-blue-900",
    2: toggleStatus ? "text-red-200" : "text-red-700",
    3: toggleStatus ? "text-purple-200" : "text-purple-800",
    4: toggleStatus ? "text-yellow-200" : "text-yellow-700",
    5: toggleStatus ? "text-orange-200" : "text-orange-600",
    default: toggleStatus ? "text-green-200" : "text-red-900",
  };

  const textColor = textColorMap[type] || textColorMap.default;

  return (
    <div
      className={classes}
      onClick={type > 0 ? () => onClick(id) : undefined}
    >
      <p
        className={`flex items-center font-mono ${marginMap[tab] || ""} ${textColor}`}
      >
        {type === 0 && (
          <svg
            className={`w-2 h-2 inline mr-2 ${toggleStatus ? "text-white": "text-black"}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
            />
          </svg>
        )}
        {title}
      </p>
    </div>
  );
}
