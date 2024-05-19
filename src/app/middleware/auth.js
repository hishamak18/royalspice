import { parse } from 'cookie';

export function withAuth(handler) {
    return async (req, res) => {
        const cookies = parse(req.headers.cookie || '');

        if (cookies.auth === 'your-token') { // Again, validate your real token here
            return handler(req, res);
        } else {
            res.status(401).json({ message: 'Unauthorized' });
        }
    };
}
