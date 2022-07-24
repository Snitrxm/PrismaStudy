import { container } from "tsyringe";

import { ICarsRepository } from "../../repositories/ICarsRepository";
import { CarsRepository } from "../../repositories/implementations/CarsRepository";

container.registerSingleton<ICarsRepository>("CarsRepository", CarsRepository);
