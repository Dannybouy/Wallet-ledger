import { LucideProps, SearchIcon } from "lucide-react";

export const Icons = {
  search: SearchIcon,
  caretDown: ({ props, size }: { props?: LucideProps; size?: number }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: "currentcolor" }}
      {...props}
    >
      <path
        d="M2.86274 0.25C1.65111 0.25 1.04529 0.25 0.764766 0.489594C0.521356 0.697486 0.392181 1.00934 0.417296 1.32846C0.446241 1.69624 0.874618 2.12462 1.73137 2.98137L3.86863 5.11863C4.26465 5.51465 4.46265 5.71265 4.69098 5.78684C4.89183 5.8521 5.10817 5.8521 5.30902 5.78684C5.53735 5.71265 5.73535 5.51465 6.13137 5.11863L8.26863 2.98137C9.12538 2.12462 9.55376 1.69624 9.5827 1.32846C9.60782 1.00934 9.47864 0.697486 9.23523 0.489594C8.95471 0.25 8.34889 0.25 7.13726 0.25H2.86274Z"
        fill="#1B2528"
      />
    </svg>
  ),

  appGrid: ({ props, size }: { props?: LucideProps; size?: number }) => (
    <svg
      width={size || 24}
      height={size || 25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: "currentcolor" }}
      {...props}
    >
      <path
        d="M10 3.25H3V10.25H10V3.25Z"
        stroke="#1B2528"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      
      />
      <path
        d="M21 3.25H14V10.25H21V3.25Z"
        stroke="#1B2528"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 14.25H14V21.25H21V14.25Z"
        stroke="#1B2528"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 14.25H3V21.25H10V14.25Z"
        stroke="#1B2528"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};
