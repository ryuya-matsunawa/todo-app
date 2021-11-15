10.times do |n|
  Task.create!(
    name: "タスク#{n + 1}",
    status: n % 3
  )
end