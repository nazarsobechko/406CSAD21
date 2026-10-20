#include <gtest/gtest.h>

#include "math_operations.h"

TEST(MathOperations, BasicAddition) {
    EXPECT_EQ(add(2, 3), 5);
    EXPECT_EQ(add(-1, 1), 0);
}
