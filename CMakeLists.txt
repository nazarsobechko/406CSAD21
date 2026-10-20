cmake_minimum_required(VERSION 3.14)

project(hello LANGUAGES CXX)

add_executable(hello main.cpp)

set_target_properties(hello PROPERTIES
    CXX_STANDARD 17
    CXX_STANDARD_REQUIRED YES
    CXX_EXTENSIONS NO
)
