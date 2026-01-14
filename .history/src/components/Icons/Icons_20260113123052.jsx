export const Eye = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.74039 3.93179C4.15584 3.93179 1.25 7.39772 1.25 8.27838C1.25 9.15905 4.15584 12.625 7.74039 12.625C11.3249 12.625 14.2308 9.15905 14.2308 8.27838C14.2308 7.39772 11.3249 3.93179 7.74039 3.93179ZM7.74039 3.93179C6.16319 3.93179 4.88464 5.19099 4.88464 6.74429C4.88464 8.29759 6.16322 9.55679 7.74041 9.55679C9.31761 9.55679 10.5962 8.29759 10.5962 6.74429C10.5962 5.19099 9.31758 3.93179 7.74039 3.93179ZM14.75 3.93182C12.7731 2.30753 10.4652 1.375 8 1.375C5.53482 1.375 3.22688 2.30753 1.25 3.93182"
        stroke="#f9f9f9"
        strokeLinecap="round"
      />
    </svg>
  );
};
export const EyeCrossed = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.4107 12.9874C9.59629 13.3656 8.69232 13.6118 7.74049 13.6118C4.15598 13.6118 1.25017 10.1207 1.25017 9.23366C1.25017 8.73085 2.18382 7.39135 3.6455 6.32525M13.452 10.6368C13.9487 10.0392 14.2308 9.51003 14.2308 9.23366C14.2308 8.3466 11.325 4.85553 7.74049 4.85553C9.31767 4.85553 10.5962 6.12387 10.5962 7.68844M7.74046 10.5213C6.16328 10.5213 4.88472 9.25301 4.88472 7.68844M14.75 4.85561C12.7732 3.21954 10.4653 2.28024 8.0001 2.28024C7.11158 2.28024 6.2435 2.40227 5.40397 2.63496M1.25017 4.85561C1.43341 4.70396 1.6195 4.55829 1.8083 4.4188M1.25 1.25004L13.7856 13.9062"
        stroke="#f9f9f9"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const Close = ({ className }) => {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      stroke="#f9f9f9"
      fill="none"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="2.5"
        d="M24 8l-16 16"
      ></path>
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="2.5"
        d="M8 8l16 16"
      ></path>
    </svg>
  );
};

export const ChevronLeft = ({ className }) => {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="ring"
        stroke="rgba(249, 249, 249, 0.2)"
        strokeWidth="1"
        d="M31.5 16c0 8.56-6.94 15.5-15.5 15.5s-15.5-6.94-15.5-15.5c0-8.56 6.94-15.5 15.5-15.5s15.5 6.94 15.5 15.5z"
      ></path>
      <path
        className="arrow"
        stroke="currentColor"
        strokeWidth="1.5"
        d="M18 20l-4-4 4-4"
      ></path>
    </svg>
  );
};

export const ChevronRight = ({ className }) => {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="ring"
        stroke="rgba(249, 249, 249, 0.2)"
        strokeWidth="1"
        d="M31.5 16c0 8.56-6.94 15.5-15.5 15.5s-15.5-6.94-15.5-15.5c0-8.56 6.94-15.5 15.5-15.5s15.5 6.94 15.5 15.5z"
      ></path>
      <path
        className="arrow"
        stroke="currentColor"
        strokeWidth="1.5"
        d="M14 12l4 4-4 4"
      ></path>
    </svg>
  );
};

export const MenuButton = () => {
  return (
    <svg
      width="28"
      height="28"
      fill="none"
      stroke="#f9f9f9"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="2.29"
        d="M4 16h24M4 8h24M12 24h16"
      ></path>
    </svg>
  );
};

export const InputCorrect = () => {
  return (
    <svg
      width="18"
      height="18"
      fill="none"
      stroke="#30b94d"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15 21.76l-5.4-6.081 1.8-2.026 3.601 4.052 7.199-8.105 1.801 2.027-9 10.133z"></path>
      <path d="M0 16c0 8.836 7.164 16 16 16s16-7.164 16-16c0-8.836-7.164-16-16-16s-16 7.164-16 16zM16 29.091c-1.719 0-3.421-0.338-5.010-0.996s-3.031-1.622-4.247-2.838-2.18-2.659-2.838-4.247c-0.658-1.588-0.997-3.29-0.997-5.010s0.339-3.421 0.997-5.010c0.658-1.588 1.622-3.031 2.838-4.247s2.659-2.18 4.247-2.838c1.588-0.658 3.291-0.997 5.010-0.997 3.472 0 6.802 1.379 9.257 3.834s3.834 5.785 3.834 9.257c0 3.472-1.379 6.802-3.834 9.257s-5.785 3.834-9.257 3.834z"></path>
    </svg>
  );
};

export const InputError = () => {
  return (
    <svg
      width="18"
      height="18"
      fill="none"
      stroke="#e90516"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 29c-3.448 0-6.754-1.37-9.192-3.808s-3.808-5.745-3.808-9.192 1.37-6.754 3.808-9.192c2.438-2.438 5.745-3.808 9.192-3.808s6.755 1.37 9.192 3.808c2.438 2.438 3.808 5.745 3.808 9.192s-1.37 6.755-3.808 9.192c-2.438 2.438-5.745 3.808-9.192 3.808zM16 32c4.243 0 8.313-1.686 11.314-4.686s4.686-7.070 4.686-11.314c0-4.243-1.686-8.313-4.686-11.314s-7.070-4.686-11.314-4.686c-4.243 0-8.313 1.686-11.314 4.686s-4.686 7.070-4.686 11.314c0 4.243 1.686 8.313 4.686 11.314s7.070 4.686 11.314 4.686zM18 22c0 0.53-0.211 1.039-0.586 1.414s-0.884 0.586-1.414 0.586-1.039-0.211-1.414-0.586c-0.375-0.375-0.586-0.884-0.586-1.414s0.211-1.039 0.586-1.414c0.375-0.375 0.884-0.586 1.414-0.586s1.039 0.211 1.414 0.586c0.375 0.375 0.586 0.884 0.586 1.414zM17.5 9.5c0-0.398-0.158-0.779-0.439-1.061s-0.663-0.439-1.061-0.439c-0.398 0-0.779 0.158-1.061 0.439s-0.439 0.663-0.439 1.061v7c0 0.398 0.158 0.779 0.439 1.061s0.663 0.439 1.061 0.439c0.398 0 0.779-0.158 1.061-0.439s0.439-0.663 0.439-1.061v-7z"></path>
    </svg>
  );
};

export const LogoIcon = () => {
  return (
    <svg
      width="42"
      height="17"
      fill="#f9f9f9"
      viewBox="0 0 79 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 20.706v-20.706h24.264c3.299 0 6.512 1.051 9.173 3.001 1.591 1.166 2.861 2.715 3.693 4.503l2.807 6.034c1.084-2.647 2.443-5.173 4.055-7.536l0.139-0.204c0.463-0.679 0.992-1.31 1.58-1.884l1.196-1.168c0.779-0.762 1.704-1.358 2.719-1.755l0.103-0.040c1.608-0.629 3.32-0.951 5.047-0.951h24.283v20.706h-79.059z"></path>
      <path d="M0 24.471h79.059v7.529h-79.059v-7.529z"></path>
    </svg>
  );
};

export const Login = ({ className }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      fill="none"
      stroke="#e3e3e3"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="2.67"
        d="M18.667 22.667l6.667-6.667-6.667-6.667"
      ></path>
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="2.67"
        d="M25.333 16h-18.667"
      ></path>
    </svg>
  );
};

export const DeleteIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#e85050"
        opacity="0.1"
        d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"
      ></path>
      <path
        fill="none"
        stroke="#e85050"
        strokeLinejoin="miter"
        strokeLinecap="butt"
        strokeMiterlimit="4"
        strokeWidth="1.14"
        d="M31.429 16c0 8.521-6.908 15.429-15.429 15.429s-15.429-6.908-15.429-15.429c0-8.521 6.908-15.429 15.429-15.429s15.429 6.908 15.429 15.429z"
      ></path>
      <path
        fill="none"
        stroke="#e85050"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="1.1429"
        d="M10 12h12"
      ></path>
      <path
        fill="none"
        stroke="#e85050"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="1.14"
        d="M20.667 12v9.333c0 0.354-0.141 0.693-0.39 0.943s-0.589 0.39-0.943 0.39h-6.667c-0.354 0-0.693-0.14-0.943-0.39s-0.391-0.589-0.391-0.943v-9.333M13.334 12v-1.333c0-0.354 0.14-0.693 0.39-0.943s0.589-0.391 0.943-0.391h2.667c0.354 0 0.693 0.14 0.943 0.391s0.39 0.589 0.39 0.943v1.333"
      ></path>
      <path
        fill="none"
        stroke="#e85050"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="1.14"
        d="M14.666 15.333v4"
      ></path>
      <path
        fill="none"
        stroke="#e85050"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="1.14"
        d="M17.334 15.333v4"
      ></path>
    </svg>
  );
};

export const TrashIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#e85050"
        opacity="0.1"
        d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z"
      ></path>
      <path
        fill="none"
        stroke="#e85050"
        strokeLinejoin="miter"
        strokeLinecap="butt"
        strokeMiterlimit="4"
        strokeWidth="1.14"
        d="M31.429 16c0 8.521-6.908 15.429-15.429 15.429s-15.429-6.908-15.429-15.429c0-8.521 6.908-15.429 15.429-15.429s15.429 6.908 15.429 15.429z"
      ></path>
      <path
        fill="none"
        stroke="#e85050"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="1.1429"
        d="M10 12h12"
      ></path>
      <path
        fill="none"
        stroke="#e85050"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="1.14"
        d="M20.667 12v9.333c0 0.354-0.141 0.693-0.39 0.943s-0.589 0.39-0.943 0.39h-6.667c-0.354 0-0.693-0.14-0.943-0.39s-0.391-0.589-0.391-0.943v-9.333M13.334 12v-1.333c0-0.354 0.14-0.693 0.39-0.943s0.589-0.391 0.943-0.391h2.667c0.354 0 0.693 0.14 0.943 0.391s0.39 0.589 0.39 0.943v1.333"
      ></path>
      <path
        fill="none"
        stroke="#e85050"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="1.14"
        d="M14.666 15.333v4"
      ></path>
      <path
        fill="none"
        stroke="#e85050"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="1.14"
        d="M17.334 15.333v4"
      ></path>
    </svg>
  );
};

<symbol id="icon-trash" viewBox="0 0 32 32">
  <path
    fill="none"
    stroke="#686868"
    style="stroke: var(--color1, #686868)"
    stroke-linejoin="round"
    stroke-linecap="round"
    stroke-miterlimit="4"
    stroke-width="2.2857"
    d="M4 8h24"
  ></path>
  <path
    fill="none"
    stroke="#686868"
    style="stroke: var(--color1, #686868)"
    stroke-linejoin="round"
    stroke-linecap="round"
    stroke-miterlimit="4"
    stroke-width="2.2857"
    d="M25.334 8v18.667c0 0.707-0.281 1.386-0.781 1.886s-1.178 0.781-1.886 0.781h-13.333c-0.707 0-1.386-0.281-1.886-0.781s-0.781-1.178-0.781-1.886v-18.667M10.667 8v-2.667c0-0.707 0.281-1.385 0.781-1.886s1.178-0.781 1.886-0.781h5.333c0.707 0 1.386 0.281 1.886 0.781s0.781 1.178 0.781 1.886v2.667"
  ></path>
  <path
    fill="none"
    stroke="#686868"
    style="stroke: var(--color1, #686868)"
    stroke-linejoin="round"
    stroke-linecap="round"
    stroke-miterlimit="4"
    stroke-width="2.2857"
    d="M13.333 14.667v8"
  ></path>
  <path
    fill="none"
    stroke="#686868"
    style="stroke: var(--color1, #686868)"
    stroke-linejoin="round"
    stroke-linecap="round"
    stroke-miterlimit="4"
    stroke-width="2.2857"
    d="M18.667 14.667v8"
  ></path>
</symbol>;
