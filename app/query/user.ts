import { getPool } from '@/app/lib/tidb';

const pool = await getPool();

async function listUsers() {
	const [data] = await pool.query(`
    SELECT *
    FROM user;
  `);

	return data;
}

export async function getUser(email: string) {
    const [user]: any = await pool.query(`
        SELECT *
        FROM user
        WHERE email = ?
    `, email);
    return user[0];
}

export async function GET() {
  try {
  	return Response.json(await listUsers());
  } catch (error) {
  	return Response.json({ error }, { status: 500 });
  }
}
