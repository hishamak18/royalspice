export const metadata = {
    title: 'Royal Spice',
    description: 'Royal admin page',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
