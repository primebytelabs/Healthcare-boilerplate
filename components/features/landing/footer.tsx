
export function Footer() {
    return (
        <footer className="border-t border-border py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="font-display text-lg font-bold text-primary">Vitalis</span>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Vitalis Health Platform. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    )
}
