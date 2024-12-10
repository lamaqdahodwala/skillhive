<script>
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

let data = prisma.user.findMany()

</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<h1>{data}</h1>