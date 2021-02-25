require "mechanize"
require "CSV"

agent = Mechanize.new
page = agent.get("https://www.homemate.co.jp/research/population/all/")
page.search("tbody").each do |a|
    page_country = a.search(".m_table_ws a").each do |i|
    puts  i.inner_text 
    puts "------------"
    end
    page_number = a.search("td.m_table_w20p").each do |i|
        puts i.inner_text
        puts "------------\n"
    end
    
end
# agent = Mechanize.new
# page = agent.get("https://www.homemate.co.jp/research/population/all/")
# page.search(".m_table_ws a").each do |a|
#     print a.inner_text 
#     print "------------\n"
    
# end
# page.search("td.m_table_w20p").each do |i|
#     print i.inner_text
#     print "------------\n"
# end


CSV.open("sample.csv","w") do |csv|
    csv << [
        
    ]
end