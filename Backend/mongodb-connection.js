const mongoose = require('mongoose')

async function main() {
  await mongoose.connect('mongodb://localhost/mr', { useUnifiedTopology: true, useNewUrlParser: true,useCreateIndex:true})
  console.log('connected')
}

main()