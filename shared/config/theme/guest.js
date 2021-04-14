const theme = {};

theme.palette = {
    primary: [
        '#0071aa', // 0: Default
        '#3B87AE',
        '#1a2b57',
    ],
    secondary: [
        '#121821', // 0: DarkBlue
        '#1a1a1a', //
    ],
    gray: [
        '#f8faff',
        '#8f8f8f',
        '#3a3a3a',
    ],
    warning: [
        '#e8c36a',
        '#ffbf00', // 0: Warning
    ],
    // color: [
    //     '#0071aa', // 0: Default
    //     '#1a2b57',
    //     '#3B87AE',
    //     '#8f8f8f',
    //     '#f8faff',
    //     '#3a3a3a',
    //     '#121821',
    //     '#e8c36a',
    // ],
    success: [
        '#00b16a', // 0: Success
    ],
    error: [
        '#f64744', // 0: Error
        '#EC3D3A', // 1: Darken 4%
        '#FF5B58', // 2: Lighten 8%
    ],

    grayscale: [
        '#bababa', // 0: GreyShade
        '#c1c1c1', // 1: GreyDark
        '#D8D8D8', // 2: Grey
        '#f1f1f1', // 3: GreyAlt
        '#F3F3F3', // 4: GreyLight
        '#fafafa', // 5: DarkWhite
        '#F9F9F9', // 6: DarkerWhite
        '#fcfcfc', // 7: #fff Darken 1%
        '#eeeeee', // 8:
        '#fbfbfb', // 9:
        '#f5f5f5', // 10:
        '#f7f8f9', // 11: today-highlight-bg
    ],
    text: [
        '#2C2C2C',
        '#323332', // 0: Heading
        '#595959', // 1: HeadingLight
        '#979797', // 2: Text
        '#797979', // 3: TextDark
        '#6a6c6a', // 4: Heading Lighten 22%
    ],
    border: [
        '#e9e9e9', // 0: Border
        '#d8d8d8', // 1: BorderDark
        '#ebebeb', // 2: BorderLight
        '#d3d3d3', // 3:
        'rgba(228, 228, 228, 0.65)', // 4:
    ],
};

theme.fonts = {
    primary: 'PT Serif, serif',
    pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
};

export default theme;
