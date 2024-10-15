import { ReportCard, reportCategories } from '@/features/home'

export const ReportSection = () => {
  return (
    <section className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-6">
      {reportCategories.map((report) => (
        <ReportCard
          style={{ backgroundColor: report.background, color: report.color }}
          key={report.id}
          {...report}
        />
      ))}
    </section>
  )
}
