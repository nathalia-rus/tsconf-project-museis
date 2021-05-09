const size = {
    mobile_ends: '499px',
    ipad_starts: '500px',
    ipad_ends: '1200px',
    smallest_laptops_ends: '1400px',
    smallest_laptops_starts: '881px',
    desktop_starts: '1201px',
    mobile_and_ipad_ends: '880px',
}

export const device = {
    desktop: `(min-width:${size.desktop_starts})`,
    smallest_laptops: `(min-width:${size.smallest_laptops_starts}) and (max-width:${size.smallest_laptops_ends})`,
    large_desktop: `(min-width:1600px)`,
    ultrawide_desktop: `(min-width:2950px)`,
    ipad: `(min-width:${size.ipad_starts}) and (max-width:${size.ipad_ends})`,
    mobile: `(max-width: ${size.mobile_ends})`,
    mobile_and_ipad: `(max-width: ${size.mobile_and_ipad_ends})`,
    beyond_ipad_mobile: `(min-width: ${size.mobile_and_ipad_ends})`,
}
