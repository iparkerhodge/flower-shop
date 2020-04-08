import { navBar } from "./navigation.js"
import { getFlowers } from "./flowers/FlowerProvider.js"
import { FlowerList } from "./flowers/FlowerList.js"
import { getRetailers } from "./retailers/RetailerProvider.js"
import { RetailerList } from "./retailers/RetailerList.js"
import { getDistributors } from "./distributors/DistributorProvider.js"
import { DistributorList } from "./distributors/DistributorList.js"

navBar()

getFlowers()
    .then(getRetailers)
    .then(getDistributors)
    .then(FlowerList)
    .then(RetailerList)
    .then(DistributorList)