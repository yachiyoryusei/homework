(1..100).each do |i| 
    if i % 5 == 0 && i % 3 == 0
        puts "FizzBuzz"
    elsif i % 5 == 0
        puts "Fizz"
    elsif i % 3 == 0
        puts "buzz"
    else
       puts i
    end
 end
