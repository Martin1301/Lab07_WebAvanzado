import { Router } from "express";
import * as controller from "./controller";

const storyRouter = Router();

storyRouter.route("/").get(controller.index);
storyRouter.route("/store").post(controller.store);
storyRouter.route("/update/:id").post(controller.upsert);
storyRouter.route("/delte/:id").delete(controller.destroy);

export default storyRouter;
