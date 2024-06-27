"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUserSchema = exports.loginUserSchema = exports.orderMenuItemSchema = exports.commentSchema = exports.orderStatusSchema = exports.ordersSchema = exports.addressSchema = exports.restaurantOwnerSchema = exports.driverSchema = exports.userSchema = exports.statusCatalogSchema = exports.menuItemSchema = exports.categorySchema = exports.restaurantSchema = exports.citySchema = exports.stateSchema = void 0;
const zod_1 = require("zod");
exports.stateSchema = zod_1.z.object({
    name: zod_1.z.string(),
    code: zod_1.z.string()
});
exports.citySchema = zod_1.z.object({
    name: zod_1.z.string(),
    state_id: zod_1.z.number(),
    address: zod_1.z.string()
});
exports.restaurantSchema = zod_1.z.object({
    name: zod_1.z.string(),
    phone: zod_1.z.string(),
    street_address: zod_1.z.string(),
    zip_code: zod_1.z.string(),
    created_at: zod_1.z.string(),
    updated_at: zod_1.z.string(),
    city_id: zod_1.z.number()
});
exports.categorySchema = zod_1.z.object({
    name: zod_1.z.string()
});
exports.menuItemSchema = zod_1.z.object({
    name: zod_1.z.string(),
    description: zod_1.z.string(),
    ingredients: zod_1.z.string(),
    price: zod_1.z.number(),
    active: zod_1.z.boolean(),
    created_at: zod_1.z.string(),
    updated_at: zod_1.z.string(),
    restarant_id: zod_1.z.number(),
    category_id: zod_1.z.number()
});
exports.statusCatalogSchema = zod_1.z.object({
    name: zod_1.z.string()
});
exports.userSchema = zod_1.z.object({
    name: zod_1.z.string(),
    contact_phone: zod_1.z.string(),
    phone_verified: zod_1.z.boolean(),
    email: zod_1.z.string(),
    email_verified: zod_1.z.boolean(),
    confirmation_code: zod_1.z.string(),
    password: zod_1.z.string(),
    created_at: zod_1.z.string(),
    updated_at: zod_1.z.string()
});
exports.driverSchema = zod_1.z.object({
    car_make: zod_1.z.string(),
    car_model: zod_1.z.string(),
    car_year: zod_1.z.number(),
    online: zod_1.z.boolean(),
    delivering: zod_1.z.boolean(),
    created_at: zod_1.z.string(),
    updated_at: zod_1.z.string(),
    user_id: zod_1.z.number()
});
exports.restaurantOwnerSchema = zod_1.z.object({
    owner_id: zod_1.z.number(),
    restaurant_id: zod_1.z.number()
});
exports.addressSchema = zod_1.z.object({
    street_address_1: zod_1.z.string(),
    street_address_2: zod_1.z.string(),
    zip_code: zod_1.z.string(),
    delivery_instructions: zod_1.z.string(),
    created_at: zod_1.z.string(),
    updated_at: zod_1.z.string(),
    user_id: zod_1.z.number(),
    city_id: zod_1.z.number()
});
exports.ordersSchema = zod_1.z.object({
    estimated_delivery_time: zod_1.z.string(),
    actual_delivery_time: zod_1.z.string(),
    price: zod_1.z.number(),
    discount: zod_1.z.number(),
    final_price: zod_1.z.number(),
    comment: zod_1.z.string(),
    created_at: zod_1.z.string(),
    updated_at: zod_1.z.string(),
    restaurant_id: zod_1.z.number(),
    delivery_address_id: zod_1.z.number(),
    user_id: zod_1.z.number(),
    driver_id: zod_1.z.number()
});
exports.orderStatusSchema = zod_1.z.object({
    order_id: zod_1.z.number(),
    status_catalog_id: zod_1.z.number(),
    created_at: zod_1.z.string()
});
exports.commentSchema = zod_1.z.object({
    comment_text: zod_1.z.string(),
    is_complaint: zod_1.z.boolean(),
    is_praise: zod_1.z.boolean(),
    created_at: zod_1.z.string(),
    updated_at: zod_1.z.string(),
    order_id: zod_1.z.number(),
    user_id: zod_1.z.number()
});
exports.orderMenuItemSchema = zod_1.z.object({
    quantity: zod_1.z.number(),
    item_price: zod_1.z.number(),
    price: zod_1.z.number(),
    order_id: zod_1.z.number(),
    menu_item_id: zod_1.z.number()
});
exports.loginUserSchema = zod_1.z.object({
    email: zod_1.z.string(),
    password: zod_1.z.string()
});
exports.registerUserSchema = zod_1.z.object({
    userId: zod_1.z.number(),
    email: zod_1.z.string(),
    password: zod_1.z.string(),
    role: zod_1.z.string().optional(),
});
