cmake_minimum_required(VERSION 3.0.0)
project(SAFEBRONC-BACKEND VERSION 0.1.0)

include(CTest)
enable_testing()
include_directories("/usr/local/mysql-8.0.21-macos10.15-x86_64/include") //添加头文件
link_directories("/usr/local/mysql-8.0.21-macos10.15-x86_64/lib") //指定链接库文件路径

add_executable(SAFEBRONC-BACKEND main.cpp)

set(CPACK_PROJECT_NAME ${PROJECT_NAME})
set(CPACK_PROJECT_VERSION ${PROJECT_VERSION})
include(CPack)
