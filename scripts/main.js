import { getFlowers } from "./flowers/FlowerProvider.js"
import { FlowerList } from "./flowers/FlowerList.js"
import { getRetailers } from "./retailers/RetailerProvider.js"
import { RetailerList } from "./retailers/RetailerList.js"
import { getDistributors } from "./distributors/DistributorProvider.js"
import { DistributorList } from "./distributors/DistributorList.js"

getFlowers()
    .then(FlowerList)
    .then(getRetailers)
    .then(RetailerList)
    .then(getDistributors)
    .then(DistributorList)