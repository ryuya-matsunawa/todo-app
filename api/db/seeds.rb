10.times do |n|
  Task.create!(
    name: "タスク#{n + 1}"
  )
end