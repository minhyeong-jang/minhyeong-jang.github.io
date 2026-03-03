if RUBY_VERSION >= '3.2'
  [Object, String, Array, Hash].each do |klass|
    klass.class_eval do
      def tainted?
        false
      end
      def taint
        self
      end
      def untaint
        self
      end
    end
  end
end