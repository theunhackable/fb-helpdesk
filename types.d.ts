import { z } from "zod";
import { userSchema } from "./validation/user";

type User = z.infer<typeof userSchema>;
