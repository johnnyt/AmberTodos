bundler_installed = !!(`gem list` =~ /^bundler/)

desc 'Alias for compile:all'
task :compile => 'compile:all'

namespace :compile do
  desc 'Compile production js/amber.deploy.js'
  task :prod do
    sh "./amber/bin/amberc -d -O js/amber.deploy"
  end

  desc 'Compile development: js/amber.js'
  task :dev do
    libs = %w[
      lib/jQuery/jquery-ui-1.8.16.custom.min lib/jQuery/jquery.textarea
      lib/CodeMirror/codemirror lib/CodeMirror/smalltalk
      Compiler Canvas IDE parser SUnit
      compat
    ].join(',')

    sh "./amber/bin/amberc -l #{libs} js/amber"

    sh "cat amber/css/amber.css amber/js/lib/CodeMirror/codemirror.css amber/js/lib/CodeMirror/amber.css > css/amber.css"
  end

  desc 'Compile production and dev'
  task :all => [:prod, :dev]
end
