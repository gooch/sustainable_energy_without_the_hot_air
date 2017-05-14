set.seed(1014)
options(digits = 3)

knitr::opts_chunk$set(
  comment = "#>",
  echo = FALSE,
  collapse = TRUE,
  cache = TRUE,
  out.width = "70%",
  fig.align = 'center',
  fig.width = 6,
  fig.asp = 0.618,  # 1 / phi
  fig.show = "hold"
)

options(dplyr.print_min = 6, dplyr.print_max = 6)

library('tidyverse')

# format classes for pretty printing tables
print.duration <- function(x, ...) {
  print.default(paste0(formatC(as.numeric(x), format="f", digits=2)), ' h')
}

format.duration <- function(x, ...) {
  paste0(formatC(as.numeric(x), format="f", digits=2), ' h')
}

print.energy <- function(x, ...) {
  print.default(paste0(formatC(as.numeric(x), format="f", digits=2)), ' kWh/d')
}

format.energy <- function(x, ...) {
  paste0(formatC(as.numeric(x), format="f", digits=2), ' kWh/d')
}
