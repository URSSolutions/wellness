module CapybaraHelpers
  def self.select_date(page, date, options = {})
    field = options[:from]
    page.select date.strftime('%Y'), :from => "#{field}_1i"
    page.select date.strftime('%B'), :from => "#{field}_2i"
    page.select date.strftime('%d'), :from => "#{field}_3i"
  end
end
