// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
})

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_tag',
  // through: {
  //   model:ProductTag,
  //   unique: false,
  // },
  // as: 'product_refs'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id",
  // through: {
  //   model: ProductTag,
  //   unique: false,
  // },
  // as: 'tag_refs'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
