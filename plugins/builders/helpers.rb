class Builders::Helpers < SiteBuilder
  def build
    helper :current_page? do |url, path|
      if path == "/"
        {aria: {current: ("page" if url == "/")}}
      else
        {aria: {current: ("page" if url.starts_with?(path))}}
      end
    end
  end
end