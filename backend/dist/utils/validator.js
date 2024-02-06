import { body, validationResult } from "express-validator";
export const validate = (validations) => {
    return async (req, res, next) => {
        for (let validation of validations) {
            const result = await validation.run(req);
            if (!result.isEmpty()) {
                break;
            }
        }
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }
        else {
            return res
                .status(422)
                .json({ error: "Validation failed", details: errors.array() });
        }
    };
};
export const loginValidator = [
    body("email").trim().isEmail().withMessage("Email is required"),
    body("password")
        .trim()
        .isLength({ min: 8 })
        .withMessage("Password should be at least 8 characters")
        .matches(/[A-Z]/)
        .withMessage("Password should contain at least one uppercase letter")
        .matches(/[a-z]/)
        .withMessage("Password should contain at least one lowercase letter")
];
export const signupValidator = [
    body("name").notEmpty().withMessage("Name is required"),
    ...loginValidator,
];
export const chatCompletionValidator = [
    body("name").notEmpty().withMessage("Message is required"),
];
//# sourceMappingURL=validator.js.map