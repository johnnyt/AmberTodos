bundler_installed = !!(`gem list` =~ /^bundler/)

task :default => :compile

desc 'Alias for compile:dev'
task :compile => 'compile:dev'

desc 'Setup local environment'
task :setup do
  sh "git submodule init"
  sh "git submodule update"
end

desc 'Run the Node.js server'
task :server do
  sh "./bin/server"
end

namespace :compile do
  desc 'Compile production js/amber.deploy.js'
  task :prod do
    sh "./amber/bin/amberc -d -O js/amber.deploy"
  end

  desc 'Compile development: js/amber.js'
  task :dev do
      # ../../js/contextMenu/jquery.contextMenu
    libs = %w[
      ../../js/ace/ace-uncompressed
      ../../js/ace-mode-smalltalk-uncompressed
      ../../js/ace/mode-html-uncompressed
      ../../js/less-1.3.min
      ../../js/handlebars
      lib/jQuery/jquery-ui-1.8.16.custom.min lib/jQuery/jquery.textarea
      lib/CodeMirror/codemirror lib/CodeMirror/smalltalk
      Compiler Canvas IDE parser SUnit
      compat
    ].join(',')

    sh "./amber/bin/amberc -l #{libs} js/amber"

    sh "cat amber/css/amber.css \
            amber/js/lib/CodeMirror/codemirror.css \
            amber/js/lib/CodeMirror/amber.css \
            js/contextMenu/jquery.contextMenu.css \
          > css/amber-ide.css"
  end

  desc 'Compile production and dev'
  task :all => [:prod, :dev]
end
