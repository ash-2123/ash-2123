all_data = readLines("trainInfo.txt")
train_route_line <- grep("s\\<route>(.*?)</route>", all_data, value = TRUE)
all_data[train_route]
print[all_data[train_route]]
