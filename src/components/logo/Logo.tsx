import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box, Link, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, sx, ...other }, ref) => {
    const logo = (
      <Box
        ref={ref}
        component="div"
        sx={{
          width: 140,
          height: 140,
          display: 'inline-flex',
          ...sx,
        }}
        {...other}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1405 487"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.3">
            <path
              d="M19.47 364H14.47V369H19.47V364ZM19.47 204.405V199.405H14.47V204.405H19.47ZM51.33 204.405H56.33V199.405H51.33V204.405ZM51.33 235.675L47.666 239.077L56.33 248.408V235.675H51.33ZM47.495 231.545L42.8401 229.72L41.693 232.645L43.831 234.947L47.495 231.545ZM66.375 208.83L68.9186 213.135L68.9545 213.113L68.9901 213.092L66.375 208.83ZM127.735 208.535L125.275 212.888H125.275L127.735 208.535ZM148.975 229.775L144.622 232.235L144.622 232.235L148.975 229.775ZM156.645 364V369H161.645V364H156.645ZM123.605 364H118.605V369H123.605V364ZM119.18 249.54L114.739 251.837L114.756 251.869L114.773 251.901L119.18 249.54ZM106.495 236.56L103.946 240.861L104.039 240.916L104.134 240.967L106.495 236.56ZM69.62 236.56L72.0482 240.931L72.0745 240.916L72.1007 240.901L69.62 236.56ZM57.23 249.54L61.6711 251.837L57.23 249.54ZM52.805 364V369H57.805V364H52.805ZM24.47 364V204.405H14.47V364H24.47ZM19.47 209.405H51.33V199.405H19.47V209.405ZM46.33 204.405V235.675H56.33V204.405H46.33ZM54.994 232.273L51.159 228.143L43.831 234.947L47.666 239.077L54.994 232.273ZM52.1499 233.37C55.7071 224.299 61.2972 217.638 68.9186 213.135L63.8314 204.525C54.1461 210.248 47.1496 218.731 42.8401 229.72L52.1499 233.37ZM68.9901 213.092C76.7625 208.322 85.8644 205.865 96.465 205.865V195.865C84.2523 195.865 73.2942 198.718 63.7599 204.568L68.9901 213.092ZM96.465 205.865C107.522 205.865 117.076 208.254 125.275 212.888L130.195 204.182C120.301 198.59 109.008 195.865 96.465 195.865V205.865ZM125.275 212.888C133.53 217.554 139.956 223.98 144.622 232.235L153.328 227.315C147.767 217.477 140.033 209.743 130.195 204.182L125.275 212.888ZM144.622 232.235C149.256 240.434 151.645 249.988 151.645 261.045H161.645C161.645 248.502 158.92 237.209 153.328 227.315L144.622 232.235ZM151.645 261.045V364H161.645V261.045H151.645ZM156.645 359H123.605V369H156.645V359ZM128.605 364V269.895H118.605V364H128.605ZM128.605 269.895C128.605 261.241 127.023 253.592 123.587 247.179L114.773 251.901C117.237 256.501 118.605 262.423 118.605 269.895H128.605ZM123.621 247.243C120.221 240.669 115.279 235.594 108.856 232.153L104.134 240.967C108.724 243.426 112.239 247.005 114.739 251.837L123.621 247.243ZM109.044 232.259C102.876 228.603 95.8793 226.84 88.205 226.84V236.84C94.2974 236.84 99.494 238.223 103.946 240.861L109.044 232.259ZM88.205 226.84C80.528 226.84 73.4652 228.604 67.1393 232.219L72.1007 240.901C76.7881 238.223 82.1153 236.84 88.205 236.84V226.84ZM67.1918 232.189C60.9711 235.645 56.164 240.718 52.7889 247.243L61.6711 251.837C64.196 246.956 67.6489 243.375 72.0482 240.931L67.1918 232.189ZM52.7889 247.243C49.398 253.799 47.805 261.406 47.805 269.895H57.805C57.805 262.65 59.162 256.688 61.6711 251.837L52.7889 247.243ZM47.805 269.895V364H57.805V269.895H47.805ZM52.805 359H19.47V369H52.805V359ZM227.132 356.625L224.629 360.954L224.644 360.962L224.658 360.97L227.132 356.625ZM197.042 326.83L192.742 329.383L197.042 326.83ZM197.042 241.28L201.323 243.862L201.332 243.848L201.341 243.833L197.042 241.28ZM227.132 211.78L229.583 216.138L229.609 216.123L229.634 216.109L227.132 211.78ZM311.502 211.78L308.969 216.091L309.01 216.115L309.05 216.138L311.502 211.78ZM341.297 241.28L336.968 243.783L336.991 243.823L337.015 243.862L341.297 241.28ZM341.297 327.125L345.596 329.678L341.297 327.125ZM311.207 356.92L313.658 361.278L313.684 361.263L313.709 361.249L311.207 356.92ZM294.392 329.78L297.031 334.026L294.392 329.78ZM311.502 311.195L307.096 308.831L307.085 308.851L307.075 308.871L311.502 311.195ZM311.502 257.21L307.075 259.534L307.097 259.577L307.12 259.62L311.502 257.21ZM294.392 238.625L291.752 242.871L294.392 238.625ZM244.242 238.625L241.653 234.348L241.627 234.363L241.602 234.379L244.242 238.625ZM226.837 257.21L222.455 254.8L222.432 254.843L222.41 254.886L226.837 257.21ZM226.837 311.195L222.386 313.474L222.42 313.54L222.455 313.605L226.837 311.195ZM244.242 329.78L241.602 334.026L241.627 334.042L241.653 334.057L244.242 329.78ZM269.317 362.54C254.805 362.54 241.602 359.109 229.605 352.28L224.658 360.97C238.228 368.695 253.148 372.54 269.317 372.54V362.54ZM229.634 352.296C217.794 345.451 208.38 336.133 201.341 324.277L192.742 329.383C200.65 342.7 211.296 353.246 224.629 360.954L229.634 352.296ZM201.341 324.277C194.366 312.531 190.832 299.168 190.832 284.055H180.832C180.832 300.802 184.77 315.956 192.742 329.383L201.341 324.277ZM190.832 284.055C190.832 268.731 194.372 255.386 201.323 243.862L192.76 238.698C184.764 251.954 180.832 267.125 180.832 284.055H190.832ZM201.341 243.833C208.373 231.988 217.771 222.782 229.583 216.138L224.68 207.422C211.319 214.938 200.656 225.398 192.742 238.727L201.341 243.833ZM229.634 216.109C241.408 209.302 254.596 205.865 269.317 205.865V195.865C252.964 195.865 238.029 199.705 224.629 207.451L229.634 216.109ZM269.317 205.865C284.247 205.865 297.419 209.308 308.969 216.091L314.034 207.469C300.804 199.699 285.853 195.865 269.317 195.865V205.865ZM309.05 216.138C320.851 222.776 330.136 231.966 336.968 243.783L345.625 238.777C337.903 225.421 327.326 214.944 313.953 207.422L309.05 216.138ZM337.015 243.862C343.966 255.386 347.507 268.731 347.507 284.055H357.507C357.507 267.125 353.574 251.954 345.578 238.698L337.015 243.862ZM347.507 284.055C347.507 299.377 343.966 312.835 336.997 324.572L345.596 329.678C353.574 316.241 357.507 300.986 357.507 284.055H347.507ZM336.997 324.572C329.958 336.428 320.544 345.746 308.704 352.591L313.709 361.249C327.042 353.541 337.689 342.995 345.596 329.678L336.997 324.572ZM308.755 352.562C296.964 359.195 283.853 362.54 269.317 362.54V372.54C285.46 372.54 300.276 368.805 313.658 361.278L308.755 352.562ZM269.317 341.565C279.591 341.565 288.883 339.092 297.031 334.026L291.752 325.534C285.347 329.515 277.922 331.565 269.317 331.565V341.565ZM297.031 334.026C305.093 329.015 311.401 322.144 315.929 313.519L307.075 308.871C303.343 315.979 298.244 321.498 291.752 325.534L297.031 334.026ZM315.907 313.559C320.661 304.701 322.992 294.829 322.992 284.055H312.992C312.992 293.341 310.996 301.563 307.096 308.831L315.907 313.559ZM322.992 284.055C322.992 273.283 320.661 263.489 315.883 254.8L307.12 259.62C310.995 266.665 312.992 274.767 312.992 284.055H322.992ZM315.929 254.886C311.401 246.261 305.093 239.39 297.031 234.379L291.752 242.871C298.244 246.907 303.343 252.426 307.075 259.534L315.929 254.886ZM297.031 234.379C288.883 229.313 279.591 226.84 269.317 226.84V236.84C277.922 236.84 285.347 238.89 291.752 242.871L297.031 234.379ZM269.317 226.84C259.216 226.84 249.953 229.324 241.653 234.348L246.831 242.902C253.477 238.88 260.931 236.84 269.317 236.84V226.84ZM241.602 234.379C233.561 239.377 227.175 246.22 222.455 254.8L231.218 259.62C235.152 252.467 240.368 246.92 246.881 242.871L241.602 234.379ZM222.41 254.886C217.857 263.557 215.642 273.321 215.642 284.055H225.642C225.642 274.729 227.556 266.596 231.264 259.534L222.41 254.886ZM215.642 284.055C215.642 294.791 217.858 304.633 222.386 313.474L231.287 308.916C227.555 301.631 225.642 293.379 225.642 284.055H215.642ZM222.455 313.605C227.175 322.185 233.561 329.028 241.602 334.026L246.881 325.534C240.368 321.485 235.152 315.938 231.218 308.785L222.455 313.605ZM241.653 334.057C249.953 339.081 259.216 341.565 269.317 341.565V331.565C260.931 331.565 253.477 329.525 246.831 325.503L241.653 334.057ZM410.421 359.575L407.821 363.846L407.856 363.867L407.89 363.887L410.421 359.575ZM389.181 336.86L384.709 339.096L384.736 339.15L384.764 339.204L389.181 336.86ZM381.806 204.405V199.405H376.806V204.405H381.806ZM415.141 204.405H420.141V199.405H415.141V204.405ZM419.566 319.16L423.973 316.799L419.566 319.16ZM431.956 332.14L429.407 336.441L429.467 336.477L429.528 336.511L431.956 332.14ZM468.831 331.845L471.38 336.146L468.831 331.845ZM481.221 318.57L476.843 316.155L476.811 316.213L476.78 316.273L481.221 318.57ZM485.941 204.405V199.405H480.941V204.405H485.941ZM518.981 204.405H523.981V199.405H518.981V204.405ZM518.981 364V369H523.981V364H518.981ZM487.416 364H482.416V369H487.416V364ZM487.416 332.73L491.212 329.476L482.416 319.214V332.73H487.416ZM490.956 336.86L495.63 338.636L496.685 335.86L494.752 333.606L490.956 336.86ZM472.371 359.575L474.986 363.837L472.371 359.575ZM441.986 362.54C430.749 362.54 421.126 360.061 412.952 355.263L407.89 363.887C417.809 369.709 429.23 372.54 441.986 372.54V362.54ZM413.021 355.304C404.766 350.279 398.303 343.384 393.598 334.516L384.764 339.204C390.286 349.609 397.983 357.857 407.821 363.846L413.021 355.304ZM393.653 334.624C389.136 325.59 386.806 315.068 386.806 302.935H376.806C376.806 316.368 379.393 328.464 384.709 339.096L393.653 334.624ZM386.806 302.935V204.405H376.806V302.935H386.806ZM381.806 209.405H415.141V199.405H381.806V209.405ZM410.141 204.405V299.985H420.141V204.405H410.141ZM410.141 299.985C410.141 307.949 411.76 315.177 415.159 321.521L423.973 316.799C421.472 312.13 420.141 306.574 420.141 299.985H410.141ZM415.159 321.521C418.534 327.822 423.302 332.824 429.407 336.441L434.505 327.839C429.99 325.163 426.498 321.512 423.973 316.799L415.159 321.521ZM429.528 336.511C435.675 339.926 442.628 341.565 450.246 341.565V331.565C444.098 331.565 438.857 330.254 434.384 327.769L429.528 336.511ZM450.246 341.565C458.089 341.565 465.191 339.814 471.38 336.146L466.282 327.544C461.851 330.169 456.563 331.565 450.246 331.565V341.565ZM471.38 336.146C477.53 332.502 482.3 327.367 485.662 320.867L476.78 316.273C474.242 321.179 470.753 324.894 466.282 327.544L471.38 336.146ZM485.599 320.985C489.221 314.421 490.941 306.874 490.941 298.51H480.941C480.941 305.486 479.515 311.312 476.843 316.155L485.599 320.985ZM490.941 298.51V204.405H480.941V298.51H490.941ZM485.941 209.405H518.981V199.405H485.941V209.405ZM513.981 204.405V364H523.981V204.405H513.981ZM518.981 359H487.416V369H518.981V359ZM492.416 364V332.73H482.416V364H492.416ZM483.62 335.984L487.16 340.114L494.752 333.606L491.212 329.476L483.62 335.984ZM486.282 335.084C482.923 343.924 477.431 350.604 469.756 355.313L474.986 363.837C484.618 357.926 491.516 349.463 495.63 338.636L486.282 335.084ZM469.756 355.313C461.997 360.075 452.801 362.54 441.986 362.54V372.54C454.378 372.54 465.439 369.695 474.986 363.837L469.756 355.313ZM557.903 364H552.903V369H557.903V364ZM557.903 204.405V199.405H552.903V204.405H557.903ZM589.763 204.405H594.763V199.405H589.763V204.405ZM589.763 236.56L585.523 239.21L594.763 253.994V236.56H589.763ZM586.813 231.84L582.078 230.232L581.315 232.478L582.573 234.49L586.813 231.84ZM603.923 209.42L606.415 213.755L606.455 213.731L606.495 213.707L603.923 209.42ZM641.978 202.34H646.978V197.34H641.978V202.34ZM641.978 232.725V237.725H646.978V232.725H641.978ZM601.268 243.05L597.732 239.514L601.268 243.05ZM591.238 364V369H596.238V364H591.238ZM562.903 364V204.405H552.903V364H562.903ZM557.903 209.405H589.763V199.405H557.903V209.405ZM584.763 204.405V236.56H594.763V204.405H584.763ZM594.003 233.91L591.053 229.19L582.573 234.49L585.523 239.21L594.003 233.91ZM591.547 233.448C594.783 223.919 599.816 217.549 606.415 213.755L601.43 205.085C592.296 210.338 585.922 218.914 582.078 230.232L591.547 233.448ZM606.495 213.707C613.442 209.539 621.953 207.34 632.243 207.34V197.34C620.506 197.34 610.137 199.861 601.35 205.133L606.495 213.707ZM632.243 207.34H641.978V197.34H632.243V207.34ZM636.978 202.34V232.725H646.978V202.34H636.978ZM641.978 227.725H628.113V237.725H641.978V227.725ZM628.113 227.725C615.963 227.725 605.679 231.567 597.732 239.514L604.803 246.586C610.623 240.766 618.236 237.725 628.113 237.725V227.725ZM597.732 239.514C589.829 247.417 586.238 258.501 586.238 271.96H596.238C596.238 260.246 599.333 252.056 604.803 246.586L597.732 239.514ZM586.238 271.96V364H596.238V271.96H586.238ZM591.238 359H557.903V369H591.238V359ZM664.782 364H659.782V369H664.782V364ZM664.782 204.405V199.405H659.782V204.405H664.782ZM696.643 204.405H701.643V199.405H696.643V204.405ZM696.643 236.56L692.403 239.21L701.643 253.994V236.56H696.643ZM693.693 231.84L688.958 230.232L688.195 232.478L689.453 234.49L693.693 231.84ZM710.802 209.42L713.295 213.755L713.335 213.731L713.375 213.707L710.802 209.42ZM748.857 202.34H753.857V197.34H748.857V202.34ZM748.857 232.725V237.725H753.857V232.725H748.857ZM708.148 243.05L704.612 239.514L708.148 243.05ZM698.117 364V369H703.117V364H698.117ZM669.782 364V204.405H659.782V364H669.782ZM664.782 209.405H696.643V199.405H664.782V209.405ZM691.643 204.405V236.56H701.643V204.405H691.643ZM700.883 233.91L697.932 229.19L689.453 234.49L692.403 239.21L700.883 233.91ZM698.427 233.448C701.663 223.919 706.696 217.549 713.295 213.755L708.31 205.085C699.176 210.338 692.802 218.914 688.958 230.232L698.427 233.448ZM713.375 213.707C720.322 209.539 728.833 207.34 739.122 207.34V197.34C727.385 197.34 717.017 199.861 708.23 205.133L713.375 213.707ZM739.122 207.34H748.857V197.34H739.122V207.34ZM743.857 202.34V232.725H753.857V202.34H743.857ZM748.857 227.725H734.992V237.725H748.857V227.725ZM734.992 227.725C722.843 227.725 712.559 231.567 704.612 239.514L711.683 246.586C717.503 240.766 725.115 237.725 734.992 237.725V227.725ZM704.612 239.514C696.709 247.417 693.117 258.501 693.117 271.96H703.117C703.117 260.246 706.212 252.056 711.683 246.586L704.612 239.514ZM693.117 271.96V364H703.117V271.96H693.117ZM698.117 359H664.782V369H698.117V359ZM771.662 364H766.662V369H771.662V364ZM771.662 204.405V199.405H766.662V204.405H771.662ZM804.997 204.405H809.997V199.405H804.997V204.405ZM804.997 364V369H809.997V364H804.997ZM771.662 182.575H766.662V187.575H771.662V182.575ZM771.662 144.225V139.225H766.662V144.225H771.662ZM804.997 144.225H809.997V139.225H804.997V144.225ZM804.997 182.575V187.575H809.997V182.575H804.997ZM776.662 364V204.405H766.662V364H776.662ZM771.662 209.405H804.997V199.405H771.662V209.405ZM799.997 204.405V364H809.997V204.405H799.997ZM804.997 359H771.662V369H804.997V359ZM776.662 182.575V144.225H766.662V182.575H776.662ZM771.662 149.225H804.997V139.225H771.662V149.225ZM799.997 144.225V182.575H809.997V144.225H799.997ZM804.997 177.575H771.662V187.575H804.997V177.575ZM874.062 351.61L877.635 348.112L874.062 351.61ZM860.197 234.495H865.197V229.495H860.197V234.495ZM832.172 234.495H827.172V239.495H832.172V234.495ZM832.172 204.405V199.405H827.172V204.405H832.172ZM854.002 197.915L850.385 194.463L854.002 197.915ZM860.197 167.825V162.825H855.197V167.825H860.197ZM893.532 167.825H898.532V162.825H893.532V167.825ZM893.532 204.405H888.532V209.405H893.532V204.405ZM929.817 204.405H934.817V199.405H929.817V204.405ZM929.817 234.495V239.495H934.817V234.495H929.817ZM893.532 234.495V229.495H888.532V234.495H893.532ZM896.187 324.47L891.627 326.522L891.647 326.566L891.668 326.61L896.187 324.47ZM904.742 333.32L902.332 337.701L902.418 337.748L902.506 337.792L904.742 333.32ZM925.392 335.975L924.894 331H924.894L925.392 335.975ZM930.997 335.385H935.997V329.799L930.445 330.416L930.997 335.385ZM930.997 364L931.704 368.95L935.997 368.336V364H930.997ZM921.852 365.18L922.436 370.146L921.852 365.18ZM913.002 360.77C897.253 360.77 885.703 356.352 877.635 348.112L870.489 355.108C880.907 365.748 895.317 370.77 913.002 370.77V360.77ZM877.635 348.112C869.553 339.859 865.197 327.989 865.197 311.785H855.197C855.197 329.801 860.084 344.481 870.489 355.108L877.635 348.112ZM865.197 311.785V234.495H855.197V311.785H865.197ZM860.197 229.495H832.172V239.495H860.197V229.495ZM837.172 234.495V204.405H827.172V234.495H837.172ZM832.172 209.405H836.597V199.405H832.172V209.405ZM836.597 209.405C845.074 209.405 852.321 206.917 857.619 201.367L850.385 194.463C847.423 197.566 843.067 199.405 836.597 199.405V209.405ZM857.619 201.367C862.844 195.893 865.197 188.638 865.197 180.215H855.197C855.197 186.739 853.419 191.284 850.385 194.463L857.619 201.367ZM865.197 180.215V167.825H855.197V180.215H865.197ZM860.197 172.825H893.532V162.825H860.197V172.825ZM888.532 167.825V204.405H898.532V167.825H888.532ZM893.532 209.405H929.817V199.405H893.532V209.405ZM924.817 204.405V234.495H934.817V204.405H924.817ZM929.817 229.495H893.532V239.495H929.817V229.495ZM888.532 234.495V310.31H898.532V234.495H888.532ZM888.532 310.31C888.532 316.335 889.499 321.791 891.627 326.522L900.747 322.418C899.335 319.282 898.532 315.298 898.532 310.31H888.532ZM891.668 326.61C893.927 331.38 897.561 335.077 902.332 337.701L907.152 328.939C904.056 327.236 901.987 325.034 900.706 322.33L891.668 326.61ZM902.506 337.792C907.367 340.223 913.324 341.27 920.082 341.27V331.27C914.253 331.27 909.984 330.351 906.978 328.848L902.506 337.792ZM920.082 341.27C921.857 341.27 923.797 341.159 925.889 340.95L924.894 331C923.053 331.184 921.453 331.27 920.082 331.27V341.27ZM925.889 340.95C927.872 340.752 929.759 340.553 931.549 340.354L930.445 330.416C928.695 330.61 926.845 330.805 924.894 331L925.889 340.95ZM925.997 335.385V364H935.997V335.385H925.997ZM930.29 359.05C927.585 359.437 924.578 359.825 921.268 360.214L922.436 370.146C925.812 369.749 928.902 369.35 931.704 368.95L930.29 359.05ZM921.268 360.214C918.062 360.591 915.314 360.77 913.002 360.77V370.77C915.804 370.77 918.956 370.555 922.436 370.146L921.268 360.214ZM988.898 359.575L986.298 363.846L986.332 363.867L986.367 363.887L988.898 359.575ZM967.658 336.86L963.185 339.096L963.213 339.15L963.241 339.204L967.658 336.86ZM960.283 204.405V199.405H955.283V204.405H960.283ZM993.618 204.405H998.618V199.405H993.618V204.405ZM998.043 319.16L1002.45 316.799L998.043 319.16ZM1010.43 332.14L1007.88 336.441L1007.94 336.477L1008 336.511L1010.43 332.14ZM1047.31 331.845L1049.86 336.146L1047.31 331.845ZM1059.7 318.57L1055.32 316.155L1055.29 316.213L1055.26 316.273L1059.7 318.57ZM1064.42 204.405V199.405H1059.42V204.405H1064.42ZM1097.46 204.405H1102.46V199.405H1097.46V204.405ZM1097.46 364V369H1102.46V364H1097.46ZM1065.89 364H1060.89V369H1065.89V364ZM1065.89 332.73L1069.69 329.476L1060.89 319.214V332.73H1065.89ZM1069.43 336.86L1074.11 338.636L1075.16 335.86L1073.23 333.606L1069.43 336.86ZM1050.85 359.575L1053.46 363.837L1050.85 359.575ZM1020.46 362.54C1009.23 362.54 999.603 360.061 991.429 355.263L986.367 363.887C996.286 369.709 1007.71 372.54 1020.46 372.54V362.54ZM991.497 355.304C983.242 350.279 976.78 343.384 972.074 334.516L963.241 339.204C968.762 349.609 976.459 357.857 986.298 363.846L991.497 355.304ZM972.13 334.624C967.613 325.59 965.283 315.068 965.283 302.935H955.283C955.283 316.368 957.869 328.464 963.185 339.096L972.13 334.624ZM965.283 302.935V204.405H955.283V302.935H965.283ZM960.283 209.405H993.618V199.405H960.283V209.405ZM988.618 204.405V299.985H998.618V204.405H988.618ZM988.618 299.985C988.618 307.949 990.237 315.177 993.635 321.521L1002.45 316.799C999.949 312.13 998.618 306.574 998.618 299.985H988.618ZM993.635 321.521C997.011 327.822 1001.78 332.824 1007.88 336.441L1012.98 327.839C1008.47 325.163 1004.97 321.512 1002.45 316.799L993.635 321.521ZM1008 336.511C1014.15 339.926 1021.1 341.565 1028.72 341.565V331.565C1022.57 331.565 1017.33 330.254 1012.86 327.769L1008 336.511ZM1028.72 341.565C1036.57 341.565 1043.67 339.814 1049.86 336.146L1044.76 327.544C1040.33 330.169 1035.04 331.565 1028.72 331.565V341.565ZM1049.86 336.146C1056.01 332.502 1060.78 327.367 1064.14 320.867L1055.26 316.273C1052.72 321.179 1049.23 324.894 1044.76 327.544L1049.86 336.146ZM1064.08 320.985C1067.7 314.421 1069.42 306.874 1069.42 298.51H1059.42C1059.42 305.486 1057.99 311.312 1055.32 316.155L1064.08 320.985ZM1069.42 298.51V204.405H1059.42V298.51H1069.42ZM1064.42 209.405H1097.46V199.405H1064.42V209.405ZM1092.46 204.405V364H1102.46V204.405H1092.46ZM1097.46 359H1065.89V369H1097.46V359ZM1070.89 364V332.73H1060.89V364H1070.89ZM1062.1 335.984L1065.64 340.114L1073.23 333.606L1069.69 329.476L1062.1 335.984ZM1064.76 335.084C1061.4 343.924 1055.91 350.604 1048.23 355.313L1053.46 363.837C1063.09 357.926 1069.99 349.463 1074.11 338.636L1064.76 335.084ZM1048.23 355.313C1040.47 360.075 1031.28 362.54 1020.46 362.54V372.54C1032.85 372.54 1043.92 369.695 1053.46 363.837L1048.23 355.313ZM1136.38 364H1131.38V369H1136.38V364ZM1136.38 204.405V199.405H1131.38V204.405H1136.38ZM1168.24 204.405H1173.24V199.405H1168.24V204.405ZM1168.24 236.56L1164 239.21L1173.24 253.994V236.56H1168.24ZM1165.29 231.84L1160.55 230.232L1159.79 232.478L1161.05 234.49L1165.29 231.84ZM1182.4 209.42L1184.89 213.755L1184.93 213.731L1184.97 213.707L1182.4 209.42ZM1220.45 202.34H1225.45V197.34H1220.45V202.34ZM1220.45 232.725V237.725H1225.45V232.725H1220.45ZM1179.74 243.05L1176.21 239.514L1179.74 243.05ZM1169.71 364V369H1174.71V364H1169.71ZM1141.38 364V204.405H1131.38V364H1141.38ZM1136.38 209.405H1168.24V199.405H1136.38V209.405ZM1163.24 204.405V236.56H1173.24V204.405H1163.24ZM1172.48 233.91L1169.53 229.19L1161.05 234.49L1164 239.21L1172.48 233.91ZM1170.02 233.448C1173.26 223.919 1178.29 217.549 1184.89 213.755L1179.91 205.085C1170.77 210.338 1164.4 218.914 1160.55 230.232L1170.02 233.448ZM1184.97 213.707C1191.92 209.539 1200.43 207.34 1210.72 207.34V197.34C1198.98 197.34 1188.61 199.861 1179.83 205.133L1184.97 213.707ZM1210.72 207.34H1220.45V197.34H1210.72V207.34ZM1215.45 202.34V232.725H1225.45V202.34H1215.45ZM1220.45 227.725H1206.59V237.725H1220.45V227.725ZM1206.59 227.725C1194.44 227.725 1184.16 231.567 1176.21 239.514L1183.28 246.586C1189.1 240.766 1196.71 237.725 1206.59 237.725V227.725ZM1176.21 239.514C1168.31 247.417 1164.71 258.501 1164.71 271.96H1174.71C1174.71 260.246 1177.81 252.056 1183.28 246.586L1176.21 239.514ZM1164.71 271.96V364H1174.71V271.96H1164.71ZM1169.71 359H1136.38V369H1169.71V359ZM1275.71 356.625L1273.1 360.888L1273.14 360.913L1273.18 360.936L1275.71 356.625ZM1247.09 326.535L1242.69 328.905L1242.7 328.92L1242.71 328.934L1247.09 326.535ZM1247.09 240.985L1242.75 238.504L1242.74 238.53L1242.72 238.557L1247.09 240.985ZM1275.41 211.78L1277.99 216.067L1278.01 216.052L1278.04 216.036L1275.41 211.78ZM1347.69 207.06L1345.68 211.641V211.641L1347.69 207.06ZM1371.58 224.17L1367.85 227.498L1367.88 227.523L1367.9 227.549L1371.58 224.17ZM1386.33 248.655L1381.63 250.356L1381.65 250.4L1381.66 250.443L1386.33 248.655ZM1391.35 286.12L1396.34 286.476L1391.35 286.12ZM1390.17 293.79V298.79H1394.07L1395.02 295.003L1390.17 293.79ZM1263.02 293.79H1258.02V298.79H1263.02V293.79ZM1263.02 267.24V262.24H1258.02V267.24H1263.02ZM1371.29 267.24L1374.31 271.222L1386.14 262.24H1371.29V267.24ZM1355.36 279.335L1350.46 278.335L1347.8 291.349L1358.38 283.317L1355.36 279.335ZM1353.29 253.67L1348.67 255.568L1348.7 255.64L1348.73 255.712L1353.29 253.67ZM1338.54 235.675L1335.69 239.777L1335.76 239.826L1335.83 239.873L1338.54 235.675ZM1291.93 235.675L1294.59 239.908L1294.64 239.881L1294.68 239.854L1291.93 235.675ZM1276 254.555L1280.54 256.657L1280.55 256.637L1280.56 256.616L1276 254.555ZM1271.58 284.055L1276.56 284.508L1276.59 284.113L1276.57 283.717L1271.58 284.055ZM1276 312.375L1271.51 314.567L1271.53 314.611L1271.55 314.654L1276 312.375ZM1293.11 331.255L1290.47 335.501L1290.5 335.517L1290.53 335.533L1293.11 331.255ZM1342.97 331.55L1340.31 327.317L1340.28 327.334L1340.25 327.352L1342.97 331.55ZM1359.19 314.735L1361.39 310.243L1357.18 308.183L1354.85 312.254L1359.19 314.735ZM1386.33 328.01L1390.94 329.95L1392.78 325.595L1388.53 323.518L1386.33 328.01ZM1371.58 348.365L1374.95 352.065L1374.95 352.06L1371.58 348.365ZM1347.98 362.525L1349.72 367.215L1349.74 367.205L1349.77 367.194L1347.98 362.525ZM1318.19 362.54C1303.05 362.54 1289.78 359.092 1278.24 352.314L1273.18 360.936C1286.42 368.712 1301.47 372.54 1318.19 372.54V362.54ZM1278.32 352.362C1266.87 345.346 1257.95 335.96 1251.48 324.136L1242.71 328.934C1250.01 342.284 1260.16 352.957 1273.1 360.888L1278.32 352.362ZM1251.5 324.164C1245.04 312.17 1241.77 298.737 1241.77 283.76H1231.77C1231.77 300.25 1235.38 315.334 1242.69 328.905L1251.5 324.164ZM1241.77 283.76C1241.77 268.364 1245.05 254.963 1251.46 243.413L1242.72 238.557C1235.37 251.787 1231.77 266.902 1231.77 283.76H1241.77ZM1251.44 243.466C1258.11 231.791 1266.95 222.69 1277.99 216.067L1272.84 207.493C1260.28 215.03 1250.24 225.399 1242.75 238.504L1251.44 243.466ZM1278.04 216.036C1288.99 209.284 1301.44 205.865 1315.53 205.865V195.865C1299.74 195.865 1285.44 199.723 1272.79 207.524L1278.04 216.036ZM1315.53 205.865C1326.95 205.865 1336.97 207.829 1345.68 211.641L1349.69 202.479C1339.53 198.031 1328.11 195.865 1315.53 195.865V205.865ZM1345.68 211.641C1354.5 215.499 1361.87 220.789 1367.85 227.498L1375.32 220.842C1368.32 212.998 1359.75 206.881 1349.69 202.479L1345.68 211.641ZM1367.9 227.549C1373.93 234.13 1378.51 241.718 1381.63 250.356L1391.04 246.954C1387.47 237.105 1382.22 228.37 1375.27 220.791L1367.9 227.549ZM1381.66 250.443C1384.97 259.086 1386.64 268.31 1386.64 278.155H1396.64C1396.64 267.153 1394.77 256.711 1391 246.867L1381.66 250.443ZM1386.64 278.155C1386.64 280.584 1386.55 283.12 1386.36 285.764L1396.34 286.476C1396.54 283.614 1396.64 280.839 1396.64 278.155H1386.64ZM1386.36 285.764C1386.18 288.266 1385.83 290.533 1385.32 292.577L1395.02 295.003C1395.69 292.327 1396.12 289.481 1396.34 286.476L1386.36 285.764ZM1390.17 288.79H1263.02V298.79H1390.17V288.79ZM1268.02 293.79V267.24H1258.02V293.79H1268.02ZM1263.02 272.24H1371.29V262.24H1263.02V272.24ZM1368.27 263.258L1352.34 275.353L1358.38 283.317L1374.31 271.222L1368.27 263.258ZM1360.26 280.335C1362.39 269.885 1361.71 260.235 1357.86 251.628L1348.73 255.712C1351.57 262.052 1352.26 269.512 1350.46 278.335L1360.26 280.335ZM1357.92 251.772C1354.4 243.2 1348.84 236.381 1341.26 231.477L1335.83 239.873C1341.62 243.622 1345.89 248.8 1348.67 255.568L1357.92 251.772ZM1341.4 231.573C1333.98 226.397 1325.28 223.89 1315.53 223.89V233.89C1323.49 233.89 1330.13 235.907 1335.69 239.777L1341.4 231.573ZM1315.53 223.89C1305.78 223.89 1296.95 226.397 1289.19 231.496L1294.68 239.854C1300.69 235.906 1307.58 233.89 1315.53 233.89V223.89ZM1289.27 231.442C1281.46 236.35 1275.54 243.446 1271.45 252.494L1280.56 256.616C1283.94 249.144 1288.64 243.653 1294.59 239.908L1289.27 231.442ZM1271.47 252.453C1267.29 261.478 1265.76 272.202 1266.59 284.393L1276.57 283.717C1275.82 272.701 1277.25 263.759 1280.54 256.657L1271.47 252.453ZM1266.6 283.602C1265.55 295.136 1267.1 305.526 1271.51 314.567L1280.5 310.183C1277.04 303.098 1275.64 294.607 1276.56 284.508L1266.6 283.602ZM1271.55 314.654C1276.07 323.477 1282.38 330.471 1290.47 335.501L1295.75 327.009C1289.29 322.992 1284.2 317.399 1280.45 310.096L1271.55 314.654ZM1290.53 335.533C1298.84 340.566 1308.21 343.04 1318.48 343.04V333.04C1309.88 333.04 1302.33 330.99 1295.7 326.978L1290.53 335.533ZM1318.48 343.04C1328.88 343.04 1338.03 340.699 1345.69 335.748L1340.25 327.352C1334.53 331.054 1327.36 333.04 1318.48 333.04V343.04ZM1345.63 335.783C1353.19 331.031 1359.18 324.831 1363.54 317.216L1354.85 312.254C1351.34 318.406 1346.51 323.416 1340.31 327.317L1345.63 335.783ZM1357 319.227L1384.14 332.501L1388.53 323.518L1361.39 310.243L1357 319.227ZM1381.73 326.07C1378.89 332.802 1374.43 339.005 1368.22 344.67L1374.95 352.06C1382.11 345.532 1387.48 338.165 1390.94 329.95L1381.73 326.07ZM1368.22 344.665C1362.25 350.097 1354.93 354.51 1346.2 357.856L1349.77 367.194C1359.52 363.46 1367.94 358.433 1374.95 352.065L1368.22 344.665ZM1346.25 357.835C1337.82 360.95 1328.49 362.54 1318.19 362.54V372.54C1329.53 372.54 1340.05 370.787 1349.72 367.215L1346.25 357.835Z"
              fill="#08C189"
            />
            <rect x="763" y="139" width="50" height="50" fill="#001C2E" />
            <path
              d="M869.699 99.3862C869.637 98.3226 869.187 97.3188 868.433 96.5655C867.68 95.8121 866.676 95.3616 865.613 95.2995C824.241 92.8703 791.102 105.326 776.973 128.694C772.075 136.688 769.661 145.956 770.038 155.323C770.284 161.313 771.503 167.223 773.647 172.821C773.773 173.166 773.984 173.473 774.26 173.714C774.537 173.955 774.87 174.122 775.229 174.2C775.587 174.277 775.96 174.263 776.311 174.158C776.663 174.053 776.982 173.86 777.239 173.599L823.431 126.7C823.835 126.296 824.314 125.975 824.842 125.757C825.37 125.538 825.936 125.425 826.507 125.425C827.078 125.425 827.644 125.538 828.172 125.757C828.699 125.975 829.179 126.296 829.583 126.7C829.987 127.103 830.307 127.583 830.526 128.111C830.744 128.639 830.857 129.204 830.857 129.775C830.857 130.347 830.744 130.912 830.526 131.44C830.307 131.968 829.987 132.447 829.583 132.851L779.103 184.092L771.391 191.804C770.589 192.585 770.111 193.639 770.05 194.756C769.99 195.874 770.352 196.973 771.065 197.836C771.456 198.288 771.936 198.655 772.474 198.914C773.013 199.172 773.599 199.317 774.196 199.339C774.793 199.361 775.389 199.26 775.945 199.041C776.501 198.823 777.006 198.492 777.429 198.07L786.553 188.945C794.238 192.662 801.992 194.689 809.682 194.961C810.287 194.983 810.89 194.994 811.492 194.994C820.249 195.016 828.84 192.604 836.305 188.027C859.673 173.897 872.134 140.764 869.699 99.3862Z"
              fill="#BC4749"
            />
          </g>
        </svg>
      </Box>
    );

    if (disabledLink) {
      return logo;
    }

    return (
      <Link component={RouterLink} to="/" sx={{ display: 'contents' }}>
        {logo}
      </Link>
    );
  }
);

export default Logo;