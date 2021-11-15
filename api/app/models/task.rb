class Task < ApplicationRecord
  enum status: { waiting: 0, process: 1, done: 2 }
end
